/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ICoordinatorBaseInterface extends ethers.utils.Interface {
  functions: {
    "cancelRequest(uint256)": FunctionFragment;
    "getCommitment(uint256)": FunctionFragment;
    "getPrepaymentAddress()": FunctionFragment;
    "pendingRequestExists(address,uint64,uint64)": FunctionFragment;
    "setConfig(uint32,uint32,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCommitment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrepaymentAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRequestExists",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [
      BigNumberish,
      BigNumberish,
      {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPrepaymentAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRequestExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;

  events: {};
}

export class ICoordinatorBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICoordinatorBaseInterface;

  functions: {
    cancelRequest(
      requestId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelRequest(uint256)"(
      requestId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getCommitment(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getCommitment(uint256)"(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getPrepaymentAddress(overrides?: Overrides): Promise<ContractTransaction>;

    "getPrepaymentAddress()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pendingRequestExists(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "pendingRequestExists(address,uint64,uint64)"(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    setConfig(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setConfig(uint32,uint32,tuple)"(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  cancelRequest(
    requestId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelRequest(uint256)"(
    requestId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getCommitment(
    requestId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getCommitment(uint256)"(
    requestId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPrepaymentAddress(overrides?: Overrides): Promise<ContractTransaction>;

  "getPrepaymentAddress()"(overrides?: Overrides): Promise<ContractTransaction>;

  pendingRequestExists(
    consumer: string,
    accId: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "pendingRequestExists(address,uint64,uint64)"(
    consumer: string,
    accId: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setConfig(
    maxGasLimit: BigNumberish,
    gasAfterPaymentCalculation: BigNumberish,
    feeConfig: {
      fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
      reqsForTier2: BigNumberish;
      reqsForTier3: BigNumberish;
      reqsForTier4: BigNumberish;
      reqsForTier5: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setConfig(uint32,uint32,tuple)"(
    maxGasLimit: BigNumberish,
    gasAfterPaymentCalculation: BigNumberish,
    feeConfig: {
      fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
      fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
      reqsForTier2: BigNumberish;
      reqsForTier3: BigNumberish;
      reqsForTier4: BigNumberish;
      reqsForTier5: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelRequest(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelRequest(uint256)"(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCommitment(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getCommitment(uint256)"(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPrepaymentAddress(overrides?: CallOverrides): Promise<string>;

    "getPrepaymentAddress()"(overrides?: CallOverrides): Promise<string>;

    pendingRequestExists(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "pendingRequestExists(address,uint64,uint64)"(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setConfig(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "setConfig(uint32,uint32,tuple)"(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancelRequest(
      requestId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelRequest(uint256)"(
      requestId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getCommitment(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCommitment(uint256)"(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrepaymentAddress(overrides?: Overrides): Promise<BigNumber>;

    "getPrepaymentAddress()"(overrides?: Overrides): Promise<BigNumber>;

    pendingRequestExists(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingRequestExists(address,uint64,uint64)"(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setConfig(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setConfig(uint32,uint32,tuple)"(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelRequest(
      requestId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelRequest(uint256)"(
      requestId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getCommitment(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCommitment(uint256)"(
      requestId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrepaymentAddress(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getPrepaymentAddress()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pendingRequestExists(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingRequestExists(address,uint64,uint64)"(
      consumer: string,
      accId: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setConfig(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setConfig(uint32,uint32,tuple)"(
      maxGasLimit: BigNumberish,
      gasAfterPaymentCalculation: BigNumberish,
      feeConfig: {
        fulfillmentFlatFeeKlayPPMTier1: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier2: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier3: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier4: BigNumberish;
        fulfillmentFlatFeeKlayPPMTier5: BigNumberish;
        reqsForTier2: BigNumberish;
        reqsForTier3: BigNumberish;
        reqsForTier4: BigNumberish;
        reqsForTier5: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
