import anchor from '@coral-xyz/anchor';

export interface IcoItem {
    seed: anchor.BN; // u64 mapped to bigint
    owner: anchor.web3.PublicKey; // pubkey mapped to string (you may use a Uint8Array or specific PubKey type if implemented elsewhere)
    icoMint: anchor.web3.PublicKey; // pubkey mapped to string
    icoDecimals: anchor.BN; // u64 mapped to bigint
    amount: anchor.BN; // u64 mapped to bigint
    costMint: anchor.web3.PublicKey; // pubkey mapped to string
    startPrice: anchor.BN; // u64 mapped to bigint
    endPrice: anchor.BN; // u64 mapped to bigint
    startDate: anchor.BN; // i64 mapped to bigint
    endDate: anchor.BN; // i64 mapped to bigint
    bonusReserve: anchor.BN; // u64 mapped to bigint
    bonusPercentage: number; // u16 mapped to number
    bonusActivator: number; // u16 mapped to number
    isClosed: number; // u8 mapped to number
    totalSold: anchor.BN; // u64 mapped to bigint
    totalReceived: anchor.BN; // u64 mapped to bigint
    unlockPercentage: number; // u16 mapped to number
    cliffPeriod: anchor.BN; // i64 mapped to bigint
    vestingPercentage: number; // u16 mapped to number
    vestingInterval: anchor.BN; // i64 mapped to bigint
    purchaseSeqNum: anchor.BN; // u64 mapped to bigint
    extra: anchor.BN; // u128 mapped to bigint
}
