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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IvrfCoordinatorBaseInterface extends ethers.utils.Interface {
  functions: {
    "getRequestConfig()": FunctionFragment;
    "requestRandomWords(bytes32,uint32,uint32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRequestConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values: [BytesLike, BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRequestConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;

  events: {};
}

export class IvrfCoordinatorBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IvrfCoordinatorBaseInterface;

  functions: {
    getRequestConfig(overrides?: CallOverrides): Promise<{
      0: number;
      1: string[];
    }>;

    "getRequestConfig()"(overrides?: CallOverrides): Promise<{
      0: number;
      1: string[];
    }>;

    "requestRandomWords(bytes32,uint32,uint32,address)"(
      keyHash: BytesLike,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "requestRandomWords(bytes32,uint64,uint32,uint32)"(
      keyHash: BytesLike,
      accId: BigNumberish,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getRequestConfig(overrides?: CallOverrides): Promise<{
    0: number;
    1: string[];
  }>;

  "getRequestConfig()"(overrides?: CallOverrides): Promise<{
    0: number;
    1: string[];
  }>;

  "requestRandomWords(bytes32,uint32,uint32,address)"(
    keyHash: BytesLike,
    callbackGasLimit: BigNumberish,
    numWords: BigNumberish,
    refundRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "requestRandomWords(bytes32,uint64,uint32,uint32)"(
    keyHash: BytesLike,
    accId: BigNumberish,
    callbackGasLimit: BigNumberish,
    numWords: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getRequestConfig(overrides?: CallOverrides): Promise<{
      0: number;
      1: string[];
    }>;

    "getRequestConfig()"(overrides?: CallOverrides): Promise<{
      0: number;
      1: string[];
    }>;

    "requestRandomWords(bytes32,uint32,uint32,address)"(
      keyHash: BytesLike,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      refundRecipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requestRandomWords(bytes32,uint64,uint32,uint32)"(
      keyHash: BytesLike,
      accId: BigNumberish,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getRequestConfig(overrides?: CallOverrides): Promise<BigNumber>;

    "getRequestConfig()"(overrides?: CallOverrides): Promise<BigNumber>;

    "requestRandomWords(bytes32,uint32,uint32,address)"(
      keyHash: BytesLike,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "requestRandomWords(bytes32,uint64,uint32,uint32)"(
      keyHash: BytesLike,
      accId: BigNumberish,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRequestConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRequestConfig()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requestRandomWords(bytes32,uint32,uint32,address)"(
      keyHash: BytesLike,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "requestRandomWords(bytes32,uint64,uint32,uint32)"(
      keyHash: BytesLike,
      accId: BigNumberish,
      callbackGasLimit: BigNumberish,
      numWords: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
