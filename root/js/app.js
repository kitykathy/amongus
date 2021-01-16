function read_more_less(){
              var dots = document.getElementById('dots');
              var moretext = document.getElementById('more');
              var mybtn = document.getElementById('mybtn');

              if(dots.style.display === 'none'){
                  dots.style.display = 'incline';
                  moretext.style.display = 'none';
                  mybtn.innerHTML ="Read more";
              } else
              {
                  dots.style.display = 'none';
                  moretext.style.display = 'incline';
                  mybtn.innerHTML ="Read less";
              }
              }