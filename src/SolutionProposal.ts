export interface SolutionProposal {
 solutions:Solution[]
}
export interface Solution {
 solutionType: string;
 legNo: number;
 legDelayTime: string;
 legAdjustDeparture: string;
 legAdjustArrival: string;
 legState: string;
}