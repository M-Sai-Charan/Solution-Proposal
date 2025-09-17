import "./App.css";
import useIssuesSolutionProposals from "./useSolutionProposals";
const issueIds = [
  "101",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
];

function App() {
  const {
    issuesSolutionProposals,
    fetchAndSetIssuesSolutionProposal,
    loading,
  } = useIssuesSolutionProposals();
  const handleissue = (issue: string) => {
    fetchAndSetIssuesSolutionProposal(issue);
    console.log(issuesSolutionProposals);
  };
  return (
    <>
      <div className="steps">
        <div className="numbers">
          {issueIds.map((issue) => (
            <button key={issue} onClick={() => handleissue(issue)}>
              {issue}
            </button>
          ))}
        </div>
        <div>
          {loading === null ? (
            issuesSolutionProposals.length > 0 ? (
              issuesSolutionProposals.map((proposal, index) => (
                <div key={index}>
                  <h3>Solution Proposal {index + 1}</h3>
                  {proposal.solutions.map((solution, solIndex) => (
                    <div key={solIndex} style={{ marginBottom: "10px" }}>
                      <strong>Solution {solIndex + 1}:</strong>
                      <p>Type: {solution.solutionType}</p>
                      <p>Leg No: {solution.legNo}</p>
                      <p>Leg Delay Time: {solution.legDelayTime}</p>
                      <p>Leg Adjust Departure: {solution.legAdjustDeparture}</p>
                      <p>Leg Adjust Arrival: {solution.legAdjustArrival}</p>
                      <p>Leg State: {solution.legState}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>No solution proposals available.</p>
            )
          ) : loading === true ? (
            <p>Loading...</p>
          ) : (
            <p>Error loading solution proposals.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
