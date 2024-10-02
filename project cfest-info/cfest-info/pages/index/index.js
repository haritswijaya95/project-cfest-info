import cfestAPI from '../../utility/api/cfest';

Page({
    data: {
        events: []  // Initialize events as an empty array
    },
    onLoad() {
        this.fetchEvents();  // Fetch events when the page loads
    },
    
    fetchEvents() {
        const CfestData = {
            "ip": "string",  // Replace "string" with the actual IP if needed
        };
        
        cfestAPI.PostAllCfest(CfestData.ip, (error, res) => {
            if (error) {
                console.error('Terjadi kesalahan:', error);
            }
            if (res) {
                console.log('Respons dari API:', res);
                this.setData({
                    events: res.data.data  // Update events with the response data
                });
              
            }
        });
    },
    handleNavigation(event) {
      // Perform validation before navigating
      if (this.data.events.length > 0) {
          // Pass the ID of the selected event if needed
          const eventId = event.currentTarget.dataset.id; // Get the ID from the clicked item
          my.navigateTo({
              url: `/pages/filter-informasi/filter-informasi?id=${eventId}` // Pass eventId as a query parameter
          });
      } else {
          my.showToast({
              title: 'Tidak ada informasi untuk ditampilkan',
              icon: 'none'
          });
      }
    }, 
    navigateToCardInfo(eventid){
    if (this.data.events.length > 0){
      const itemid = eventid.currentTarget.dataset.id;
      my.navigateTo({
        url:`/pages/card-info/card-info?id=${itemid}`
      })
    } else{
      my.showToast({
        title:"tampilkan informasi",
        icon: 'none'
      })
    }
  }

});