let data = fetch("https://api.github.com/users");

console.log(data);

let final_data = data.then((res) => {
  //   console.log(res.json());
  return res.json();
});

final_data.then((res) => console.log(res));
