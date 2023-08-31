import WordDummydata from "../data/WordDummyData";
import WordModel from "../models/WordModel";
import { vocabSliceActions } from "../store/VocabCardSlice";
import { useSelector,useDispatch } from 'react-redux';
const GetAllVocab = async (dispatch)=>{
    // console.log("invoked2");
    const options = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
    };
    try {
        const response = await fetch("https://vocabapi2023-production.up.railway.app/allvocab", options)
        const data = await response.json();
        if (response.ok){
            // console.log(data);
            // return data;
            dispatch(vocabSliceActions.set(data));
        }
    } catch (error) {
        console.log(error);
    }
}
const GetAllMcq = async (dispatch)=>{
    // console.log("mcq invoked 2");
    const options = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
    };
    try {
        const response = await fetch("https://vocabapi2023-production.up.railway.app/mcq", options)
        const data = await response.json();
        if (response.ok){
            // console.log(data);
            dispatch(vocabSliceActions.setMcqData(data));
        }
    } catch (error) {
        console.log(error);
    }
}
// const convertIntoObjects=(data,dispatch)=>{

//     // array = WordDummydata;
    
//     array = data.map((obj)=>{
//         wordmeaning = obj.wordmeaning.length!=0 ? obj.wordmeaning[0].meaning : "Not added yet"
//         return new WordModel(obj._id,wordmeaning,obj.wordsentence,obj.word);
//     })
//     // console.log(array);
//     dispatch(vocabSliceActions.set(array));
    
// }
const GetFetchedData=(dispatch)=>{
    // console.log("invoked");
    GetAllVocab(dispatch)
}
const GetFetchMcqData=(dispatch)=>{
    // console.log("mcq invoked");
    GetAllMcq(dispatch)
}
export default GetFetchedData;
export {GetFetchMcqData}