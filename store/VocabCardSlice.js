import {createSlice,configureStore} from '@reduxjs/toolkit';
import WordModel from '../models/WordModel';
import McqModel  from '../models/McqModel';
const initialState = {
    AllVocabData :null,
    AllMcqData : null,
}
const vocabSlice = createSlice({
    name : "vocab",
    initialState : initialState,
    reducers : {
        set(state,action){
            state.AllVocabData =  action.payload.map((obj)=>{
                return new WordModel(obj.$id,obj.meaning,"",obj.word);
            });
            
        },
        makeItNull(state,action){
            state.AllVocabData = null;
        },
        setMcqData(state,action){
            state.AllMcqData = action.payload.map((obj)=>{
                return new McqModel(obj._id,obj.word,obj.meaning,obj.choiceOptions);
            });
        },
        makeMcqDataNull(state,action){
            state.AllMcqData = null;
        },
    }
    
})
export default vocabSlice;
export const vocabSliceActions = vocabSlice.actions;