data =     [
    {
      date:"2023-01-03",
      rating:3
    },
    {
      date:"2023-01-03",
      rating:4
    },
    {
      date:"2023-01-04",
      rating:1
    },
    {
      date:"2023-01-07",
      rating:5
    },
    {
      date:"2023-01-07",
      rating:5
    },
    {
      date:"2023-01-08",
      rating:3
    }
  ]

  let totalRating = 0;

  for(let i = 0; i < data.length; i++) {

    totalRating += data[i].rating;

}

let averageRating = totalRating / data.length;



let divElement = document.createElement("div")
let divContent = document.createTextNode(("Average Rating: " + averageRating ))
divElement.appendChild(divContent)
document.body.appendChild(divElement)

let oneStar = document.createElement("img")
let twoStar = document.createElement("img")
let threeStar = document.createElement("img")
let fourStar = document.createElement("img")
let fiveStar = document.createElement("img")

oneStar.src = "1stars.png"
twoStar.src = "2stars.png"
threeStar.src = "3stars.png"
fourStar.src = "4stars.png"
fiveStar.src = "5stars.png"

oneStar.style.display = "block"
twoStar.style.display = "block"
threeStar.style.display = "block"
fourStar.style.display = "block"
fiveStar.style.display = "block"


oneStar.setAttribute("rating", "1");
twoStar.setAttribute("rating", "2");
threeStar.setAttribute("rating", "3");
fourStar.setAttribute("rating", "4");
fiveStar.setAttribute("rating", "5");




document.body.appendChild(oneStar)
document.body.appendChild(twoStar)
document.body.appendChild(threeStar)
document.body.appendChild(fourStar)
document.body.appendChild(fiveStar)


oneStar.addEventListener("click" , updateRating)
twoStar.addEventListener("click" , updateRating)
threeStar.addEventListener("click" , updateRating)
fourStar.addEventListener("click" , updateRating)
fiveStar.addEventListener("click" , updateRating)



function updateRating(event) {
    let clickedRating = parseInt(event.target.getAttribute("rating"));
    //  event.target is the clicked star
    // the rating attribute is turned into an integar via "parseInt"
    // the integar is then stored inside ClickedRating
  
    let oldNumberOfRatings = data.length;
    // the length of the array called "data" is stored inside "oldNumberOfRatings"

    let oldAverage = totalRating / oldNumberOfRatings;

    // OldNumberOfRatings is equal to 6
    // totalRating is equal to 21
    // oldAverage is equal to 3.5
    
  
    let newNumberOfRatings = oldNumberOfRatings + 1;
    // Adding 1 to oldNumberOfRatings because we are clicking on a star
    // newNumberofRatings is equal to 7;
    let newAvg  = oldAverage + (clickedRating - oldAverage) / newNumberOfRatings;
    // Wasim's formula
  
    
  
    divContent.textContent = "Average Rating: " + newAvg

      let ratingImgs = document.querySelectorAll("img")
      
      for(let i = 0; i < ratingImgs.length; i++){

        if(ratingImgs[i] !== event.target){

            ratingImgs[i].remove()
        }
      }

  }


  let inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.max = "30";


document.body.appendChild(inputElement)  


  let spanElement = document.createElement("span")

  spanElement.style.color = "green"

  let spanContent = document.createTextNode("30") 
  spanElement.appendChild(spanContent)
  
  document.body.appendChild(spanElement)

  inputElement.addEventListener("input", function() {
  
    if(inputElement.value.length > 30) {

      spanElement.style.color = "red"
    }
    else{
      spanElement.style.color = "green"
    }
  })

  inputElement.addEventListener("input", function() {

    let inputvalueLength = inputElement.value.length;
    let remainChars = 30 - inputvalueLength;
    spanElement.textContent = remainChars;

  })


  let pTag = document.createElement("p")
  let pTagContent = document.createTextNode("Submit Button")
  pTag.appendChild(pTagContent)
  document.body.appendChild(pTag)



// Added some extra stuff for fun


let wrongMessage = document.createElement("p");
document.body.appendChild(wrongMessage);

pTag.addEventListener("click", function() {
  if (inputElement.value.length < 30) {
    let newPtag = document.createElement("p");
    document.body.appendChild(newPtag);
    newPtag.textContent = inputElement.value;
    document.body.removeChild(pTag);
    document.body.removeChild(inputElement);
    document.body.removeChild(spanElement);
    wrongMessage.textContent = "";

  } else {
    wrongMessage.textContent = "What are you doing? Don't you see the red number? Remove the specified characters!";
  }
});

  
  


















