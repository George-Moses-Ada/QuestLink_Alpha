# QuestLink Alpha

Dark-first Web3 quest/reward Alpha.

## Locked rules

- 100 Power per qualifying action.
- 1 qualified referral satisfies the referral requirement.
- Robinhood Chain Testnet: Chain ID 46630.
- Testnet RPC: https://rpc.testnet.chain.robinhood.com
- Production: Chain ID 4663.
- Production RPC: https://rpc.mainnet.chain.robinhood.com

## Run

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example`.

## Notes

This is the first development scaffold. Quest actions are currently UI-level demo interactions; server-side verification, persistent database storage, referral attribution, eligibility, allocation, and the production claim contract must be wired before Alpha launch.
