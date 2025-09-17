import getAuthToken from "./tokenApi";
import type { SolutionProposal } from "./SolutionProposal";
const fetchIssuesSolutionProposals = async (
  issueId: string
): Promise<SolutionProposal[]> => {
  const token = await getAuthToken();
  if (!token) {
    throw new Error("No auth token available");
  }
  const response = await fetch(
    `http://tsv.innooscan1.nlogx-dev.lnsystems.int:8480/netlineops/api/issues/${issueId}/solutionproposals`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch solution proposals");
  }
  const data = await response.json();
  return data as SolutionProposal[];
};
export default fetchIssuesSolutionProposals;
