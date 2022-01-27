import { Identifiable } from "../../generics/identifiable";
import { Transaction } from "./transaction";

export interface TransactionListResponse extends Identifiable {
    transactionList: Transaction[];
}