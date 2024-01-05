
  
  document.write('<h1>berikut ini adalah tahun tahun kabisat</h1> <br>');
  for (let i = 1600; i <= 2024; i++){
    if( i % 4 !=0){
      // document.write(i + '<span> bukan tahun kabisat!</span><br>')
    } else if (i % 100 !=0){
      document.write(i + '<span> tahun kabisat!</span><br>')
    } else if (i % 400 !=0){
      // document.write(i + '<span> bukan tahun kabisat!</span><br>')
    } else {
      // document.write(i + '<span> bukan tahun kabisat!</span><br>')
    }
  }