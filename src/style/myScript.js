


function clickImage(src) {

    console.log("before is " + document.getElementById('modalImage').src);
    document.getElementById('modalImage').src = src;
    console.log("before is " + document.getElementById('modalImage').src);
    console.log(document.getElementById('modal01').src);
    document.getElementById('modal01').style.display='block';
  }

  function closeImage(event) {
    console.log("Click image to enlarge");
    event.id.style.display='none';
  }