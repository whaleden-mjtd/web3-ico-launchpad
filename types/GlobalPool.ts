import anchor from '@coral-xyz/anchor';

export type GlobalPoolData = {
    admin: anchor.web3.PublicKey;
    totalIcoCount: anchor.BN;
    icoSeqNum: anchor.BN;
    isPaused: number;
    extra: anchor.BN;
};
