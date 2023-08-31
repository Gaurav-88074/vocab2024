const AddVocab = async (word, meaning) => {
    const body  = JSON.stringify({ word: word, meaning: meaning });
    // console.log(body);
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        },
        body : body
    };
    try {
        const response = await fetch("https://vocabapi2023-production.up.railway.app/addvocab", options)
        const data = await response.json();
        if (response.ok){
            // console.log("data sucessfully added");
            return data;
        }
    } catch (error) {
        console.log(error);
    }
    
};
export {AddVocab};
