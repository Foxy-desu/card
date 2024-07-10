import 'immer';
import { createSlice, PayloadAction, createAsyncThunk, SerializedError, Dispatch } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const LONG_FETCH = 'http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesLong';
const ERR_FETCH = 'http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesError';
const PLAIN_FETCH = 'http://devapp.bonusmoney.pro/mobileapp/getAllCompanies';
const IDEAL_FETCH = 'http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesIdeal';
export interface ICard {
    company: {
        companyId: string,
    },
    customerMarkParameters: {
        loyaltyLevel: {
                number: number,
                name: string,
                requiredSum: number,
                markToCash: number,
                cashToMark: number
        },
        mark: number
    },
    mobileAppDashboard: {
        companyName: string,
        logo: string,
        backgroundColor: string,
        mainColor: string,
        cardBackgroundColor: string,
        textColor: string,
        highlightTextColor: string,
        accentColor: string,
    },
};
export interface ICards {
    cards: ICard[] | [],
    isLoading: boolean,
    error: SerializedError | null,
};
const initialState: ICards = {
    cards: [],
    isLoading: false,
    error: null,
};
// разобраться с типом any
export const fetchCards: any = createAsyncThunk (
    'cards/fetchCards',
    async (queryOptions: any, {rejectWithValue}) => {
        const {limit, offset} = queryOptions;
        try {
            const options = {
                method: 'POST',
                headers: {
                    'TOKEN': '123',
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    offset,
                    limit
                }),
            };
            const response = await fetch(PLAIN_FETCH, options);
            const data = await response.json();
            if (response.status === 200) {
                return data.companies;
            } else {
                if(response.status === 400) {
                    throw new Error(data.message);
                };
                if(response.status === 401) {
                    throw new Error('Ошибка авторизации');
                };
                if(response.status === 500) {
                    throw new Error('Все упало');
                };
            }
        } catch(error:any) {
            return rejectWithValue({message: error.message});
        }
    }
)
export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<ICard>) => {
            state.cards = [...state.cards, action.payload];
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter(card => card.company.companyId !== action.payload);
        },
        addAllCards: (state, action: PayloadAction<ICard[]>) =>{
            state.cards = [...state.cards,...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
           .addCase(fetchCards.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
           .addCase(fetchCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cards = [...state.cards, ...action.payload];
                state.error = null;
            })
           .addCase(fetchCards.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { addCard, addAllCards, deleteCard} = cardSlice.actions;
export const selectCards = (state: RootState) => state.cards;
export default cardSlice.reducer; 