const eventsContainer = document.getElementsByClassName('events__container');

const url = `https://oevent.herokuapp.com/api/v1/event`;

//Fetch data
const fetchData = async () => {
    try {
      let response = await fetch(url);
        //  {
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json"
        // }
        
      // });
      let data = await response.json();
      console.log(data);
      // const { event } = data;
      console.log(data);
      // let count = 0;
       data.map(data => {
        const {
          name,
          date,
          venue, 
          time,
          event_image,
          comments
        } = data;
        // console.log(name, date, venue, time, event_image, comments);
      //   count++;

        console.log(eventsContainer);
     eventsContainer.innerHTML += `
        <div class="col-4 events">
            <img src="${event_image}">
            <h3>Event title: ${name}</h3>
            <h5>Time: ${time}</h5>
            <h5>Date: ${date}</h5>
            <h5>Venue: ${venue}</h5>
            <p>
              
            </p>
        </div>
        `;
      });
    } catch (err) {
      console.log(err);
    }
  };
  //call fetch
  fetchData();
