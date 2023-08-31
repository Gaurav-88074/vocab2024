import { Client, Account, ID, Databases } from 'appwrite';
import { vocabSliceActions } from "../store/VocabCardSlice";
import { shuffle } from './randomcode';
//-------------------------------------
// import WordDummydata from "../data/WordDummyData";
// import WordModel from "../models/WordModel";
import { useSelector, useDispatch } from 'react-redux';
export const AddVocab = async (word, meaning) => {
    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64f078f556d28f9b1656');
    const database = new Databases(client);
    const promise = database.createDocument(
        '64f0791eb40e5e78150d',
        '64f0793d6660859225e4',
        ID.unique(),
        {
            word: word,
            meaning: meaning,
        }
    );

    promise.then(function (response) {
        console.log(response);

    }, function (error) {
        console.log(error);
    });

};
//------------------------------------------------------------
const GetAllVocab = async (dispatch) => {
    // console.log("invoked2");
    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64f078f556d28f9b1656');
    const database = new Databases(client);
    //----------------------------------------------------------
    try {
        const response = database.getDocument(
            '64f0791eb40e5e78150d',
            '64f0793d6660859225e4',
            '',
            []
        )
        response.then((data) => {
            const arr = Array.from(data.documents);
            arr.reverse()
            dispatch(vocabSliceActions.set(arr));
            // return JSON.stringify(data.documents);
            // console.log(data);
        })
        // .then((data)=>{
        //     console.log(data);

        // })
    } catch (error) {
        console.log(error);
    }
}

const GetAllMcq = async (dispatch) => {
    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64f078f556d28f9b1656');
    const database = new Databases(client);
    //----------------------------------------------------------
    try {
        const response = database.getDocument(
            '64f0791eb40e5e78150d',
            '64f0793d6660859225e4',
            '',
            []
        )
        response.then((data) => {
            const DATA = data.documents
            const resMCQ = [];
            shuffle(DATA);
            const n = DATA.length;
            return new Promise((resolve, reject) => {
                try {
                    if (DATA.length >= 4) {
                        for (let i = 0; i < n; i++) {
                            const obj = DATA[i];
                            choiceOptions = [
                                DATA[i % n].meaning,
                                DATA[(i + 1) % n].meaning,
                                DATA[(i + 2) % n].meaning,
                                DATA[(i + 3) % n].meaning
                            ]
                            shuffle(choiceOptions);
                            resMCQ.push({
                                '_id': obj.$id,
                                'word': obj.word,
                                'meaning': obj.meaning,
                                'choiceOptions': choiceOptions
                            })
                        }
                        shuffle(resMCQ);
                        resolve(resMCQ);
                    }
                    else {
                        resolve(resMCQ)
                    }
                } catch (error) {
                    reject(error);
                }
            })
        })
            .then((resMCQ) => {
                dispatch(vocabSliceActions.setMcqData(resMCQ));
            })
    } catch (error) {
        console.log(error);
    }
}
const GetFetchedData = (dispatch) => {
    // console.log("invoked");
    GetAllVocab(dispatch)
}
const GetFetchMcqData = (dispatch) => {
    // console.log("mcq invoked");
    GetAllMcq(dispatch)
}
export default GetFetchedData;
export { GetFetchMcqData }