import{
  API_BASE_URL,
  cfest
} from '../../config/config';

// events data

function PostAllCfest(ip,callback){ 
  console.log(`${API_BASE_URL}${cfest.events_data}`)
  my.request({
    url:`${API_BASE_URL}${cfest.events_data}`,
    method:'POST',
    data:{
      "ip": ip,
    },
    headers:{
      "Content-Type": "application/json"
    },
    dataType:'json',
    success:(res) => {
      callback(null, res);
    },
    fail: (error) =>{
      callback(error, null);
    }
  });
}


// events-detail
function PostAllCfestDetail(ip,callback){
  console.log(`${API_BASE_URL}${cfest.events_detail}`)
  my.request({
    url:`${API_BASE_URL}${cfest.events_detail}`,
    method:'POST',
    data:{
      "ip": "string",
    },
    headers:{
      "Content-Type": "application/json"
    },
    dataType:'json',
    success:(res) => {
      callback(null, res);
    },
    fail:(error) =>{
      callback(error,null);
    }
  });
}

// events-articles

function PostAllCfestArticles(ip,callback){
  console.log(`${API_BASE_URL}${cfest.events_articles}`),
  my.request({
    url:`${API_BASE_URL}${cfest.events_articles}`,
    method:'POST',
    data:{
      "ip":ip,
    },
    headers:{
      "Content-Type":"application/json"
    },
    dataType:'json',
    success:(res) =>{
      callback(null, res);
    },
    fail:(error) =>{
      callback(error,null)
    }
  });
}

export default {PostAllCfest, PostAllCfestDetail,PostAllCfestArticles}