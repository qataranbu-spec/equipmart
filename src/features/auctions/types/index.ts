// Auction types
export interface Auction {
  id: string;
  title: string;
  startingBid: number;
  currentBid: number;
  endTime: Date;
  equipment: {
    id: string;
    title: string;
    image: string;
    condition: string;
  };
  bidders: number;
  status: 'active' | 'ended' | 'upcoming';
}

export interface Bid {
  id: string;
  auctionId: string;
  bidder: string;
  amount: number;
  timestamp: Date;
}