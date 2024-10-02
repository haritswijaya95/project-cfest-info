import cfestAPI from '../../utility/api/cfest';

Page({
  data: {
    events: [],
    filteredEvents: [],
    showLuarNegeri: false // Track whether to show Luar Negeri events
  },
  onLoad() {
    this.fetchEventDetails();
  },
  fetchEventDetails() {
    const fetchData = {
      "ip": "string",
    };
    cfestAPI.PostAllCfest(fetchData.ip, (error, res) => {
      if (error) {
        console.error('Terjadi kesalahan:', error);
      }
      if (res) {
        console.log('Respons dari API:', res);
        this.setData({
          events: res.data.data,
          filteredEvents: res.data.data.filter(event => event.category === 'Dalam Negeri')
        });
      }
    });
  },
  onSearch(e) {
    const value = e.detail.value.toLowerCase();
    const filteredEvents = this.data.events.filter(event => event.title.toLowerCase().includes(value));
    this.setData({
      filteredEvents: filteredEvents
    });
  },
  filterByCategory(category) {
    const filteredEvents = this.data.events.filter(event => event.category === category);
    this.setData({
      filteredEvents: filteredEvents
    });
  },
  onClickDalamNegeri() {
    this.setData({
      filteredEvents: this.data.events.filter(event => event.category === 'Dalam Negeri'),
      showLuarNegeri: false
    });
  },
  onClickLuarNegeri() {
    this.setData({
      filteredEvents: this.data.events.filter(event => event.category === 'Luar Negeri'),
      showLuarNegeri: true
    });
  }
});