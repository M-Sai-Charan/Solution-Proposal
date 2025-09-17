import { useState } from "react";
import type { SolutionProposal } from "./SolutionProposal";
import fetchIssuesSolutionProposals from "./solutionProposalApi";

const useIssuesSolutionProposals = () => {
  const [issuesSolutionProposals, setIssuesSolutionProposals] = useState<
    SolutionProposal[]
  >([]);
  const [loading, setLoading] = useState<boolean | null>(null);

  const fetchAndSetIssuesSolutionProposal = async (issueId: string) => {
    setLoading(true);
    try {
      const data: SolutionProposal[] = await fetchIssuesSolutionProposals(
        issueId
      );
      setIssuesSolutionProposals(data);
    } catch (error) {
      console.error("Error fetching solution proposals:", error);
      setIssuesSolutionProposals([]);
    } finally {
      setLoading(null);
    }
  };

  return {
    issuesSolutionProposals,
    fetchAndSetIssuesSolutionProposal,
    loading,
  };
};

export default useIssuesSolutionProposals;
