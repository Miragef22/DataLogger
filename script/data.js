class dataManagement{

    constructor(){

        //intanciando o elemento HTML na variavel do JS
        this._titleEl = document.querySelector("#title");
        this._descriptionEl = document.querySelector("#clientDescription");
        this._modelEl = document.querySelector("#textModel");
        this._statusEl = document.getElementsByName("status");
        this._textTecnicalDescriptionEl = document.querySelector("#textTecnicalDescription");
        this._textResolutionEl = document.querySelector("#textResolution");
        this._textLogEl = document.querySelector("#textLog");
        this._currentDateEl = document.querySelector("#dateStamp");
        this._radioInformation;
        this._locale = "pt-br"
        this.preLoad();   
        this.copyData();
    }
    
    //funçâo principal da classe
    preLoad(){

        //setando valores pre definidos no formulario
        this.currentDate = this.currentDate.toLocaleDateString(this._locale);
        this.status[0].checked = true;

        
    }

    //Funçâo que possui como finalidade tratar o status do radio button 
    radioValidation(){
        
        
        if(this.status[0].checked == true){
            this._radioInformation = "Open";
            this.status[1].checked = false;
            return this._radioInformation;
        }
        else if(this.status[1].checked == true){
            this._radioInformation = "Closed";
            this.status[0].checked = false;
            return this._radioInformation;
        }
        else{
            alert("O valor do status não pode ser nulo!");
        }
    }

    //gera a saida
    outputLog(){
        
        this.radioStatus = this.radioValidation();
       
        
        this.textOut = 
        " Title# "+ this.title+
        "\n Description# "+ this.description +
        "\n Model# "+ this.model +
        "\n Status# "+ this.radioStatus +
        "\n Resolution# " + this.textResolution +
        "\n Date# "+ this.currentDate 
        ;

        this.textLog = this.textOut;
    }

    copyData(){
        
        this._textLogEl.select();
        document.execCommand('copy');
    }

    get currentDate(){
        //puxa a data atual
        return new Date();
    }

    set currentDate(Date){
        this._currentDateEl.value = Date;
    }

    get title(){
        return this._titleEl.value;
    }

    set title(value){
        this._titleEl.value = value;    
    }

    get description(){
        return this._descriptionEl.value;
    }

    set description(value){
        this._descriptionEl.value = value;
    }

    get model(){
        return this._modelEl.value;
    }

    set model(value){
        this._modelEl.value = value;
    }

    get status(){
        return this._statusEl;
    }

    set status(value){
        this._statusEl[0] = value;
    }

    get tecnicalDescription(){
        return this._textTecnicalDescriptionEl.value;
    }

    set tecnicalDescription(value){
        this._textTecnicalDescriptionEl.value = value;
    }

    get textResolution(){
        return this._textResolutionEl.value;
    }

    set textResolution(value){
        this._textResolutionEl.value = value;
    }

    get textLog(){
        return this._textLogEl.value;
    }

    set textLog(value){
        this._textLogEl.value = value;
    }
}
