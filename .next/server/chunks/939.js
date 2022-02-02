"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);
/* harmony import */ var _candy_machine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(961);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_candy_machine__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__]);
([_candy_machine__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const MintButton = ()=>{
    // call to useWallet function to get the info about connected wallet, like the public key
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    // set the host to Devnet
    const rpcHost = 'https://api.devnet.solana.com';
    // establish a new connection to the solana devnet
    const connection = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.Connection(rpcHost ? rpcHost : _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.clusterApiUrl('devnet'));
    //function declaration -> the setCandyMachine function determines the candyMachine variable
    const { 0: candyMachine , 1: setCandyMachine  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client
    const anchorWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!wallet || !wallet.publicKey || !wallet.signAllTransactions || !wallet.signTransaction) {
            console.log("Wallet Not Connected");
            return;
        }
        return {
            publicKey: wallet.publicKey,
            signAllTransactions: wallet.signAllTransactions,
            signTransaction: wallet.signTransaction
        };
    }, [
        wallet
    ]);
    const Mint = async ()=>{
        // turnes the public key string below into a public key object (required for the next functions)
        const getCandyMachineId = ()=>{
            try {
                const candyMachineId = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__.web3.PublicKey("Ax9fYaiAjVFm7Xk2H9q5M9jqJ4XpKYxr3qaHN6URTwLa");
                return candyMachineId; // returns the candyMachineID
            } catch (e) {
                console.log('Failed to construct CandyMachineId', e);
                return undefined;
            }
        };
        // calls the above function to construct the public key object
        const candyMachineId1 = getCandyMachineId();
        // gets the state of the candy machine on the blockchain and stores this with setCandyMachine 
        // in the candyMachine variable declared above
        if (anchorWallet && candyMachineId1) {
            const cndy = await (0,_candy_machine__WEBPACK_IMPORTED_MODULE_4__/* .getCandyMachineState */ .Qk)(anchorWallet, candyMachineId1, connection);
            setCandyMachine(cndy);
        }
        // if the wallet is connected and both the candyMachine and wallet PubKey are not NULL, then mint
        // using the candy machine stored in the candyMachine variable and the wallet Public key of the user
        if (wallet.connected && candyMachine?.program && wallet.publicKey) {
            await (0,_candy_machine__WEBPACK_IMPORTED_MODULE_4__/* .mintOneToken */ .CI)(candyMachine, wallet.publicKey);
            console.log("minted");
        }
    };
    // here the minting function defined above is called
    //Minting()
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: async ()=>{
            await Mint();
        },
        children: "Mint"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MintButton);

});

/***/ }),

/***/ 961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qk": () => (/* binding */ getCandyMachineState),
/* harmony export */   "CI": () => (/* binding */ mintOneToken)
/* harmony export */ });
/* unused harmony exports CANDY_MACHINE_PROGRAM, awaitTransactionSignatureConfirmation, getCandyMachineCreator, shortenAddress */
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(369);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(661);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_connection__WEBPACK_IMPORTED_MODULE_4__]);
_connection__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
/* this component defines functions withwhich to interact with the candy machine. These
are then called by other components. Taken with (some) alterations from metaplex */ 





const CANDY_MACHINE_PROGRAM = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ');
const TOKEN_METADATA_PROGRAM_ID = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
const awaitTransactionSignatureConfirmation = async (txid, timeout, connection, queryStatus = false)=>{
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject)=>{
        setTimeout(()=>{
            if (done) {
                return;
            }
            done = true;
            console.log('Rejecting for timeout...');
            reject({
                timeout: true
            });
        }, timeout);
        while(!done && queryStatus){
            // eslint-disable-next-line no-loop-func
            (async ()=>{
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid, 
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log('REST null result for', txid, status);
                        } else if (status.err) {
                            console.log('REST error for', txid, status);
                            done = true;
                            reject(status.err);
                        } else if (!status.confirmations) {
                            console.log('REST no confirmations for', txid, status);
                        } else {
                            console.log('REST confirmation for', txid, status);
                            done = true;
                            resolve(status);
                        }
                    }
                } catch (e) {
                    if (!done) {
                        console.log('REST connection error: txid', txid, e);
                    }
                }
            })();
            await sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) {
        connection.removeSignatureListener(subId);
    }
    done = true;
    console.log('Returning status', status);
    return status;
};
const createAssociatedTokenAccountInstruction = (associatedTokenAddress, payer, walletAddress, splTokenMintAddress)=>{
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.TransactionInstruction({
        keys,
        programId: _utils__WEBPACK_IMPORTED_MODULE_5__/* .SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID */ .Tb,
        data: Buffer.from([])
    });
};
const getCandyMachineState = async (anchorWallet, candyMachineId, connection)=>{
    const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Provider(connection, anchorWallet, {
        preflightCommitment: 'recent'
    });
    const idl = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Program.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
    let program;
    if (idl != null) program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Program(idl, CANDY_MACHINE_PROGRAM, provider);
    else (0,process__WEBPACK_IMPORTED_MODULE_3__.exit)(1) // I ADDED THIS
    ;
    const state = await program.account.candyMachine.fetch(candyMachineId);
    const itemsAvailable = state.data.itemsAvailable.toNumber();
    const itemsRedeemed = state.itemsRedeemed.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    const presale = state.data.whitelistMintSettings && state.data.whitelistMintSettings.presale && (!state.data.goLiveDate || state.data.goLiveDate.toNumber() > new Date().getTime() / 1000);
    return {
        id: candyMachineId,
        program,
        state: {
            itemsAvailable,
            itemsRedeemed,
            itemsRemaining,
            isSoldOut: itemsRemaining === 0,
            isActive: (presale || state.data.goLiveDate.toNumber() < new Date().getTime() / 1000) && (state.data.endSettings ? state.data.endSettings.endSettingType.date ? state.data.endSettings.number.toNumber() > new Date().getTime() / 1000 : itemsRedeemed < state.data.endSettings.number.toNumber() : true),
            isPresale: presale,
            goLiveDate: state.data.goLiveDate,
            treasury: state.wallet,
            tokenMint: state.tokenMint,
            gatekeeper: state.data.gatekeeper,
            endSettings: state.data.endSettings,
            whitelistMintSettings: state.data.whitelistMintSettings,
            hiddenSettings: state.data.hiddenSettings,
            price: state.data.price
        }
    };
};
const getMasterEdition = async (mint)=>{
    return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from('edition'), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getMetadata = async (mint)=>{
    return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getCandyMachineCreator = async (candyMachine)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        Buffer.from('candy_machine'),
        candyMachine.toBuffer()
    ], CANDY_MACHINE_PROGRAM);
};
const mintOneToken = async (candyMachine, payer)=>{
    const mint = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.Keypair.generate();
    const userTokenAccountAddress = (await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getAtaForMint */ .w2)(mint.publicKey, payer))[0];
    const userPayingAccountAddress = candyMachine.state.tokenMint ? (await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getAtaForMint */ .w2)(candyMachine.state.tokenMint, payer))[0] : payer;
    const candyMachineAddress = candyMachine.id;
    const remainingAccounts = [];
    const signers = [
        mint
    ];
    const cleanupInstructions = [];
    const instructions = [
        _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SystemProgram.createAccount({
            fromPubkey: payer,
            newAccountPubkey: mint.publicKey,
            space: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.MintLayout.span,
            lamports: await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.MintLayout.span),
            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID
        }),
        _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createInitMintInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, mint.publicKey, 0, payer, payer),
        createAssociatedTokenAccountInstruction(userTokenAccountAddress, payer, payer, mint.publicKey),
        _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createMintToInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, mint.publicKey, userTokenAccountAddress, payer, [], 1), 
    ];
    if (candyMachine.state.gatekeeper) {
        remainingAccounts.push({
            pubkey: (await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getNetworkToken */ .Gj)(payer, candyMachine.state.gatekeeper.gatekeeperNetwork))[0],
            isWritable: true,
            isSigner: false
        });
        if (candyMachine.state.gatekeeper.expireOnUse) {
            remainingAccounts.push({
                pubkey: _utils__WEBPACK_IMPORTED_MODULE_5__/* .CIVIC */ .Ex,
                isWritable: false,
                isSigner: false
            });
            remainingAccounts.push({
                pubkey: (await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getNetworkExpire */ .T7)(candyMachine.state.gatekeeper.gatekeeperNetwork))[0],
                isWritable: false,
                isSigner: false
            });
        }
    }
    if (candyMachine.state.whitelistMintSettings) {
        const mint = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey(candyMachine.state.whitelistMintSettings.mint);
        const whitelistToken = (await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getAtaForMint */ .w2)(mint, payer))[0];
        remainingAccounts.push({
            pubkey: whitelistToken,
            isWritable: true,
            isSigner: false
        });
        if (candyMachine.state.whitelistMintSettings.mode.burnEveryTime) {
            const whitelistBurnAuthority = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.Keypair.generate();
            remainingAccounts.push({
                pubkey: mint,
                isWritable: true,
                isSigner: false
            });
            remainingAccounts.push({
                pubkey: whitelistBurnAuthority.publicKey,
                isWritable: false,
                isSigner: true
            });
            signers.push(whitelistBurnAuthority);
            const exists = await candyMachine.program.provider.connection.getAccountInfo(whitelistToken);
            if (exists) {
                instructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createApproveInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, whitelistToken, whitelistBurnAuthority.publicKey, payer, [], 1));
                cleanupInstructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createRevokeInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, whitelistToken, payer, []));
            }
        }
    }
    if (candyMachine.state.tokenMint) {
        const transferAuthority = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.Keypair.generate();
        signers.push(transferAuthority);
        remainingAccounts.push({
            pubkey: userPayingAccountAddress,
            isWritable: true,
            isSigner: false
        });
        remainingAccounts.push({
            pubkey: transferAuthority.publicKey,
            isWritable: false,
            isSigner: true
        });
        instructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createApproveInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, userPayingAccountAddress, transferAuthority.publicKey, payer, [], candyMachine.state.price.toNumber()));
        cleanupInstructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createRevokeInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, userPayingAccountAddress, payer, []));
    }
    const metadataAddress = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const [candyMachineCreator, creatorBump] = await getCandyMachineCreator(candyMachineAddress);
    instructions.push(await candyMachine.program.instruction.mintNft(creatorBump, {
        accounts: {
            candyMachine: candyMachineAddress,
            candyMachineCreator,
            payer: payer,
            wallet: candyMachine.state.treasury,
            mint: mint.publicKey,
            metadata: metadataAddress,
            masterEdition,
            mintAuthority: payer,
            updateAuthority: payer,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID,
            systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.SystemProgram.programId,
            rent: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_RENT_PUBKEY,
            clock: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_CLOCK_PUBKEY,
            recentBlockhashes: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
            instructionSysvarAccount: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_INSTRUCTIONS_PUBKEY
        },
        remainingAccounts: remainingAccounts.length > 0 ? remainingAccounts : undefined
    }));
    try {
        return (await (0,_connection__WEBPACK_IMPORTED_MODULE_4__/* .sendTransactions */ .zt)(candyMachine.program.provider.connection, candyMachine.program.provider.wallet, [
            instructions,
            cleanupInstructions
        ], [
            signers,
            []
        ])).txs.map((t)=>t.txid
        );
    } catch (e) {
        console.log(e);
    }
    return [];
};
const shortenAddress = (address, chars = 4)=>{
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
const sleep = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
};

});

/***/ }),

/***/ 661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zt": () => (/* binding */ sendTransactions)
/* harmony export */ });
/* unused harmony exports getErrorForTransaction, SequenceType, sendTransactionsWithManualRetry, sendTransaction, sendTransactionWithRetry, getUnixTs, sendSignedTransaction, sleep */
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__]);
_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
/* this component defines various functions required by the candy-machine.ts component to send instructions
to the smart contract - copied from metaplex */ 

const getErrorForTransaction = async (connection, txid)=>{
    // wait for all confirmation before geting transaction
    await connection.confirmTransaction(txid, 'max');
    const tx = await connection.getParsedConfirmedTransaction(txid);
    const errors = [];
    if (tx?.meta && tx.meta.logMessages) {
        tx.meta.logMessages.forEach((log)=>{
            const regex = /Error: (.*)/gm;
            let m;
            while((m = regex.exec(log)) !== null){
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                if (m.length > 1) {
                    errors.push(m[1]);
                }
            }
        });
    }
    return errors;
};
var SequenceType;
(function(SequenceType) {
    SequenceType[SequenceType["Sequential"] = 0] = "Sequential";
    SequenceType[SequenceType["Parallel"] = 1] = "Parallel";
    SequenceType[SequenceType["StopOnFailure"] = 2] = "StopOnFailure";
})(SequenceType || (SequenceType = {}));
async function sendTransactionsWithManualRetry(connection, wallet, instructions, signers) {
    let stopPoint = 0;
    let tries = 0;
    let lastInstructionsLength = null;
    let toRemoveSigners = {};
    instructions = instructions.filter((instr, i)=>{
        if (instr.length > 0) {
            return true;
        } else {
            toRemoveSigners[i] = true;
            return false;
        }
    });
    let ids = [];
    let filteredSigners = signers.filter((_, i)=>!toRemoveSigners[i]
    );
    while(stopPoint < instructions.length && tries < 3){
        instructions = instructions.slice(stopPoint, instructions.length);
        filteredSigners = filteredSigners.slice(stopPoint, filteredSigners.length);
        if (instructions.length === lastInstructionsLength) tries = tries + 1;
        else tries = 0;
        try {
            if (instructions.length === 1) {
                const id = await sendTransactionWithRetry(connection, wallet, instructions[0], filteredSigners[0], 'single');
                ids.push(id.txid);
                stopPoint = 1;
            } else {
                const { txs  } = await sendTransactions(connection, wallet, instructions, filteredSigners, SequenceType.StopOnFailure, 'single');
                ids = ids.concat(txs.map((t)=>t.txid
                ));
            }
        } catch (e) {
            console.error(e);
        }
        console.log('Died on ', stopPoint, 'retrying from instruction', instructions[stopPoint], 'instructions length is', instructions.length);
        lastInstructionsLength = instructions.length;
    }
    return ids;
}
const sendTransactions = async (connection, wallet, instructionSet, signersSet, sequenceType = SequenceType.Parallel, commitment = 'singleGossip', successCallback = (txid, ind)=>{}, failCallback = (txid, ind)=>false
, block)=>{
    if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();
    const unsignedTxns = [];
    if (!block) {
        block = await connection.getRecentBlockhash(commitment);
    }
    for(let i = 0; i < instructionSet.length; i++){
        const instructions = instructionSet[i];
        const signers = signersSet[i];
        if (instructions.length === 0) {
            continue;
        }
        let transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction();
        instructions.forEach((instruction)=>transaction.add(instruction)
        );
        transaction.recentBlockhash = block.blockhash;
        transaction.setSigners(// fee payed by the wallet owner
        wallet.publicKey, ...signers.map((s)=>s.publicKey
        ));
        if (signers.length > 0) {
            transaction.partialSign(...signers);
        }
        unsignedTxns.push(transaction);
    }
    const signedTxns = await wallet.signAllTransactions(unsignedTxns);
    const pendingTxns = [];
    let breakEarlyObject = {
        breakEarly: false,
        i: 0
    };
    console.log('Signed txns length', signedTxns.length, 'vs handed in length', instructionSet.length);
    for(let i1 = 0; i1 < signedTxns.length; i1++){
        const signedTxnPromise = sendSignedTransaction({
            connection,
            signedTransaction: signedTxns[i1]
        });
        signedTxnPromise.then(({ txid , slot  })=>{
            successCallback(txid, i1);
        }).catch((reason)=>{
            // @ts-ignore
            failCallback(signedTxns[i1], i1);
            if (sequenceType === SequenceType.StopOnFailure) {
                breakEarlyObject.breakEarly = true;
                breakEarlyObject.i = i1;
            }
        });
        if (sequenceType !== SequenceType.Parallel) {
            try {
                await signedTxnPromise;
            } catch (e) {
                console.log('Caught failure', e);
                if (breakEarlyObject.breakEarly) {
                    console.log('Died on ', breakEarlyObject.i);
                    // Return the txn we failed on by index
                    return {
                        number: breakEarlyObject.i,
                        txs: await Promise.all(pendingTxns)
                    };
                }
            }
        } else {
            pendingTxns.push(signedTxnPromise);
        }
    }
    if (sequenceType !== SequenceType.Parallel) {
        await Promise.all(pendingTxns);
    }
    return {
        number: signedTxns.length,
        txs: await Promise.all(pendingTxns)
    };
};
const sendTransaction = async (connection, wallet, instructions, signers, awaitConfirmation = true, commitment = 'singleGossip', includesFeePayer = false, block)=>{
    if (!wallet.publicKey) throw new WalletNotConnectedError();
    let transaction = new Transaction();
    instructions.forEach((instruction)=>transaction.add(instruction)
    );
    transaction.recentBlockhash = (block || await connection.getRecentBlockhash(commitment)).blockhash;
    if (includesFeePayer) {
        transaction.setSigners(...signers.map((s)=>s.publicKey
        ));
    } else {
        transaction.setSigners(// fee payed by the wallet owner
        wallet.publicKey, ...signers.map((s)=>s.publicKey
        ));
    }
    if (signers.length > 0) {
        transaction.partialSign(...signers);
    }
    if (!includesFeePayer) {
        transaction = await wallet.signTransaction(transaction);
    }
    const rawTransaction = transaction.serialize();
    let options = {
        skipPreflight: true,
        commitment
    };
    const txid = await connection.sendRawTransaction(rawTransaction, options);
    let slot = 0;
    if (awaitConfirmation) {
        const confirmation = await awaitTransactionSignatureConfirmation(txid, DEFAULT_TIMEOUT, connection, commitment);
        if (!confirmation) throw new Error('Timed out awaiting confirmation on transaction');
        slot = confirmation?.slot || 0;
        if (confirmation?.err) {
            const errors = await getErrorForTransaction(connection, txid);
            console.log(errors);
            throw new Error(`Raw transaction ${txid} failed`);
        }
    }
    return {
        txid,
        slot
    };
};
const sendTransactionWithRetry = async (connection, wallet, instructions, signers, commitment = 'singleGossip', includesFeePayer = false, block, beforeSend)=>{
    if (!wallet.publicKey) throw new WalletNotConnectedError();
    let transaction = new Transaction();
    instructions.forEach((instruction)=>transaction.add(instruction)
    );
    transaction.recentBlockhash = (block || await connection.getRecentBlockhash(commitment)).blockhash;
    if (includesFeePayer) {
        transaction.setSigners(...signers.map((s)=>s.publicKey
        ));
    } else {
        transaction.setSigners(// fee payed by the wallet owner
        wallet.publicKey, ...signers.map((s)=>s.publicKey
        ));
    }
    if (signers.length > 0) {
        transaction.partialSign(...signers);
    }
    if (!includesFeePayer) {
        transaction = await wallet.signTransaction(transaction);
    }
    if (beforeSend) {
        beforeSend();
    }
    const { txid , slot  } = await sendSignedTransaction({
        connection,
        signedTransaction: transaction
    });
    return {
        txid,
        slot
    };
};
const getUnixTs = ()=>{
    return new Date().getTime() / 1000;
};
const DEFAULT_TIMEOUT = 15000;
async function sendSignedTransaction({ signedTransaction , connection , timeout =DEFAULT_TIMEOUT  }) {
    const rawTransaction = signedTransaction.serialize();
    const startTime = getUnixTs();
    let slot = 0;
    const txid = await connection.sendRawTransaction(rawTransaction, {
        skipPreflight: true
    });
    console.log('Started awaiting confirmation for', txid);
    let done = false;
    (async ()=>{
        while(!done && getUnixTs() - startTime < timeout){
            connection.sendRawTransaction(rawTransaction, {
                skipPreflight: true
            });
            await sleep(500);
        }
    })();
    try {
        const confirmation = await awaitTransactionSignatureConfirmation(txid, timeout, connection, 'recent', true);
        if (!confirmation) throw new Error('Timed out awaiting confirmation on transaction');
        if (confirmation.err) {
            console.error(confirmation.err);
            throw new Error('Transaction failed: Custom instruction error');
        }
        slot = confirmation?.slot || 0;
    } catch (err) {
        console.error('Timeout Error caught', err);
        if (err.timeout) {
            throw new Error('Timed out awaiting confirmation on transaction');
        }
        let simulateResult = null;
        try {
            simulateResult = (await simulateTransaction(connection, signedTransaction, 'single')).value;
        } catch (e) {}
        if (simulateResult && simulateResult.err) {
            if (simulateResult.logs) {
                for(let i = simulateResult.logs.length - 1; i >= 0; --i){
                    const line = simulateResult.logs[i];
                    if (line.startsWith('Program log: ')) {
                        throw new Error('Transaction failed: ' + line.slice('Program log: '.length));
                    }
                }
            }
            throw new Error(JSON.stringify(simulateResult.err));
        }
    // throw new Error('Transaction failed');
    } finally{
        done = true;
    }
    console.log('Latency', txid, getUnixTs() - startTime);
    return {
        txid,
        slot
    };
}
async function simulateTransaction(connection, transaction, commitment) {
    // @ts-ignore
    transaction.recentBlockhash = await connection._recentBlockhash(// @ts-ignore
    connection._disableBlockhashCaching);
    const signData = transaction.serializeMessage();
    // @ts-ignore
    const wireTransaction = transaction._serialize(signData);
    const encodedTransaction = wireTransaction.toString('base64');
    const config = {
        encoding: 'base64',
        commitment
    };
    const args = [
        encodedTransaction,
        config
    ];
    // @ts-ignore
    const res = await connection._rpcRequest('simulateTransaction', args);
    if (res.error) {
        throw new Error('failed to simulate transaction: ' + res.error.message);
    }
    return res.result;
}
async function awaitTransactionSignatureConfirmation(txid, timeout, connection, commitment = 'recent', queryStatus = false) {
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject)=>{
        setTimeout(()=>{
            if (done) {
                return;
            }
            done = true;
            console.log('Rejecting for timeout...');
            reject({
                timeout: true
            });
        }, timeout);
        try {
            subId = connection.onSignature(txid, (result, context)=>{
                done = true;
                status = {
                    err: result.err,
                    slot: context.slot,
                    confirmations: 0
                };
                if (result.err) {
                    console.log('Rejected via websocket', result.err);
                    reject(status);
                } else {
                    console.log('Resolved via websocket', result);
                    resolve(status);
                }
            }, commitment);
        } catch (e1) {
            done = true;
            console.error('WS error in setup', txid, e1);
        }
        while(!done && queryStatus){
            // eslint-disable-next-line no-loop-func
            (async ()=>{
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid, 
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log('REST null result for', txid, status);
                        } else if (status.err) {
                            console.log('REST error for', txid, status);
                            done = true;
                            reject(status.err);
                        } else if (!status.confirmations) {
                            console.log('REST no confirmations for', txid, status);
                        } else {
                            console.log('REST confirmation for', txid, status);
                            done = true;
                            resolve(status);
                        }
                    }
                } catch (e) {
                    if (!done) {
                        console.log('REST connection error: txid', txid, e);
                    }
                }
            })();
            await sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) connection.removeSignatureListener(subId);
    done = true;
    console.log('Returning status', status);
    return status;
}
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
}

});

/***/ }),

/***/ 759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tb": () => (/* binding */ SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID),
/* harmony export */   "Ex": () => (/* binding */ CIVIC),
/* harmony export */   "w2": () => (/* binding */ getAtaForMint),
/* harmony export */   "T7": () => (/* binding */ getNetworkExpire),
/* harmony export */   "Gj": () => (/* binding */ getNetworkToken)
/* harmony export */ });
/* unused harmony exports toDate, formatNumber, createAssociatedTokenAccountInstruction */
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* this component defines various functions required by the candy-machine.ts component to send instructions
to the smart contract - copied from metaplex */ 



const toDate = (value)=>{
    if (!value) {
        return;
    }
    return new Date(value.toNumber() * 1000);
};
const numberFormater = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const formatNumber = {
    format: (val)=>{
        if (!val) {
            return '--';
        }
        return numberFormater.format(val);
    },
    asNumber: (val)=>{
        if (!val) {
            return undefined;
        }
        return val.toNumber() / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL;
    }
};
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
const CIVIC = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey('gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs');
const getAtaForMint = async (mint, buyer)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        buyer.toBuffer(),
        _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID);
};
const getNetworkExpire = async (gatekeeperNetwork)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        gatekeeperNetwork.toBuffer(),
        Buffer.from('expire')
    ], CIVIC);
};
const getNetworkToken = async (wallet, gatekeeperNetwork)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        wallet.toBuffer(),
        Buffer.from('gateway'),
        Buffer.from([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]),
        gatekeeperNetwork.toBuffer(), 
    ], CIVIC);
};
function createAssociatedTokenAccountInstruction(associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new TransactionInstruction({
        keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
}


/***/ })

};
;