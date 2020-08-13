const suffixAsyncAction = {
    REQUEST: "REQUEST",
    SUCCESS: "SUCCESS",
    FAIL: "FAIL"
}

export const createActionType = (typeString) =>{
    return Object.values(suffixAsyncAction).reduce((acc, curr)=>{
        acc[curr] = `${typeString}_${curr}`;
        return acc;
    }, {});
}