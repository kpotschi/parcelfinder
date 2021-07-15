


// let niceDatetime = formatDate(dateString); // func is down under-choose format

// June 24, 2021 version
// const formatDate = (dateString) => {
// 	const options = { year: "numeric", month: "long", day: "numeric"}
// 	return new Date(dateString).toLocaleDateString(undefined, options)
//   };

  // Thursday, 24 June 2021, 15:41-version
  // const formatDate = (dateString) => {
	// const options = { weekday: 'long',year: "numeric", month: "long", day: "numeric" , hour: "numeric", minute:"numeric"}
	// return new Date(dateString).toLocaleDateString('en-GB', options)
  // }

    // Thu, 24/06/2021, 15:41-version
	const formatDate = (dateString) => {
		const options = { weekday: 'short',year: "numeric", month: "numeric", day: "numeric" , hour: "numeric", minute:"numeric"}
    	return new Date(dateString).toLocaleDateString('en-GB', options);
  }
export default formatDate;


