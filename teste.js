    const chosenLetter='p';
    const capitalChosenLetter=chosenLetter.toUpperCase();
    const buttonContainer=document.getElementById('button-container');
    const buttonResults=document.getElementById('press-button');
    const fatherTextArea=document.querySelector('.input-1');
    const animalTextArea=document.querySelector('.input-2');
    const profissaoTextArea=document.querySelector('.input-3');
    const colorTextArea=document.querySelector('.input-4');
    const alimentosTextArea=document.querySelector('.input-5');
    const contadorHolder = document.getElementById('contador-holder');
    const roundContador=document.getElementById('round-contador');
    const pointsContador=document.getElementById('pontos-contador');
    const hitN1=document.querySelector('.n1');
    const hitN2=document.querySelector('.n2');
    const hitN3=document.querySelector('.n3');
    const hitN4=document.querySelector('.n4');
    const hitN5=document.querySelector('.n5');
    let tempo=181;
    const pointsArray= [];
    let round=1;
    let totalPoints=0;
    roundContador.innerText=`${round}`;
    pointsContador.innerText=`${totalPoints}`;
    let activated=false;
    
    
    function inputsResults(){
    const father=fatherTextArea.value;
    const animal=animalTextArea.value;
    const profissao=profissaoTextArea.value;
    const color=colorTextArea.value;
    const alimentos=alimentosTextArea.value;
    const capitalFather=father.toUpperCase();
    const capitalAnimal=animal.toUpperCase();
    const capitalProfissao=profissao.toUpperCase();
    const capitalColor=color.toUpperCase();
    const capitalAlimento=alimentos.toUpperCase();
    
    console.log(father);
    console.log(animal);
    console.log(profissao);
    console.log(color);
    console.log(alimentos);

    buttonResults.disabled=true;

    
    if(father.charAt(0) == chosenLetter || capitalFather.charAt(0) == capitalChosenLetter){
        verificaPalavra(fatherTextArea, hitN1);
        
    }else{
        hitN1.innerText='Errou!';
    }
    
    if(animal.charAt(0) == chosenLetter || capitalAnimal.charAt(0) == capitalChosenLetter){
        verificaPalavra(animalTextArea, hitN2);
    }else{
        hitN2.innerText='Errou!';
    }
    
    if(profissao.charAt(0) == chosenLetter || capitalProfissao.charAt(0) == capitalChosenLetter){
        verificaPalavra(profissaoTextArea, hitN3);
      
    }else{
        hitN3.innerText='Errou!';
    }
    
    
    if(color.charAt(0) == chosenLetter || capitalColor.charAt(0) == capitalChosenLetter){
        verificaPalavra(colorTextArea, hitN4);
    
    }else{
        hitN4.innerText='Errou!';
    }
    
    if(alimentos.charAt(0) == chosenLetter || capitalAlimento.charAt(0) == capitalChosenLetter){
        verificaPalavra(alimentosTextArea, hitN5);
        
    }else{
        hitN5.innerText='Errou!';
    }
    
    round++;

    roundContador.innerText=`${round}`;

    switch(round){
      case 1:
      tempo=181;
      break;
      case 2:
      tempo=121;
      break;
      case 3:
      tempo=81;
      break;
      case 4:
      tempo=61;
      break;
      case 5:
      tempo=31;
      break;
      case 6:
      tempo=16;
      break;

      default:
      tempo=16;
      break;
      
    }

    if(activated){
      contagemRegressiva();
      activated=false;
      
    }else{
      console.log('o activated não foi ativado');
    }

    setTimeout(() =>{
      fatherTextArea.value='';
      animalTextArea.value='';
      profissaoTextArea.value='';
      colorTextArea.value='';
      alimentosTextArea.value='';
      hitN1.innerText='';
      hitN2.innerText='';
      hitN3.innerText='';
      hitN4.innerText='';
      hitN5.innerText='';
      buttonResults.disabled=false;
      

    }, 5000);

    
    

    }
    
    
    
    function contagemRegressiva() {

      setTimeout(() => {
        tempo--;
        contadorHolder.innerText = `${tempo}s`;
        if(tempo > 0){
            contagemRegressiva();
        }else{
            activated=true;
            inputsResults();
            
        }
     
        
      }, 1000);
    
    
    
    }
    




    async function verificaPalavra(insiraPalavra, hitOrMiss) {
        const inputValue=insiraPalavra.value;
        const tinyInputValue=inputValue.toLowerCase();
      
        try {
          const url = `https://api.dicionario-aberto.net/word/${tinyInputValue}`;
          const response = await fetch(url);
          const data = await response.json();
          if (data.length > 0) {
            pointsArray.push(10);
            console.log(pointsArray);
            hitOrMiss.innerText='Acertou!';
          } else {
            hitOrMiss.innerText='Errou!';
          }
        } catch (error) {
          console.error('Erro na verificação:', error);
        }

        const resultadoPontos=pointsArray.reduce((acc, valor) => {
            return acc + valor;
        
        }, 0);

        
        console.log(resultadoPontos);

        pointsContador.innerText=`${resultadoPontos}`;

      }
      
    
    contagemRegressiva();
    
    
    
    buttonResults.addEventListener('click', inputsResults);
    
    
    fatherTextArea.addEventListener('input', function() {
        this.value = this.value.replace(/\s/g, '');
      });
      
      animalTextArea.addEventListener('input', function() {
          this.value = this.value.replace(/\s/g, ''); 
        });
      
      profissaoTextArea.addEventListener('input', function() {
          this.value = this.value.replace(/\s/g, ''); 
        });
      
        colorTextArea.addEventListener('input', function() {
          this.value = this.value.replace(/\s/g, ''); 
        });
      
        alimentosTextArea.addEventListener('input', function() {
          this.value = this.value.replace(/\s/g, ''); 
        });



  



    