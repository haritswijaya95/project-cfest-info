import cfestAPI from '../../utility/api/cfest';
Page({
  data: {
    events:[]
  },
  onLoad(){
    this.fetchcardInfo();
  },
  fetchcardInfo(){
    const cardinfoData={
      "ip":"string",
    }
    cfestAPI.PostAllCfestDetail(cardinfoData.ip,(error,res) => {
      if(error){
        console.error('Terjadi kesalahan:', error);
      }
      if(res){
        console.log('Respons dari API:', res);
        this.setData({
            events:res.data.event_detail
        })
      }
    })
  },


});
