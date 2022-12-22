import { combineReducers } from "redux";

const songReducer=()=>{
    return [
        {title:'summer high', duration: '3:05'},
        {title:'relax',duration:'4:10'},
        {title:'perfect',duration:'2:25'},
        {title:'love me like you do',duration:'3:02'}
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
});