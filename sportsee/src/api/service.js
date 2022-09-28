// export const getUser = async () => {
//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     },
//   };

//   try {
//     const response = await fetch('http://localhost:3000/user/12', requestOptions);
//     const jsonRes = await response.json();
//     console.log(response.status);

//     if (response.status === 404) {
//       console.log('not found');
//     }

//     if (response.status === 200) {
//       const user = jsonRes.find(elm => elm === 'id');
//       console.log(user);
//       // return user;
//     }

//   } catch {
//     console.error();
//     return [];
//   }
// }

