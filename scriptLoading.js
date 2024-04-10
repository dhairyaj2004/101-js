// SCRIPT LOADING
//3 types of loading js into html
//1)Normal-><srcipt src="script.js"></script>->html is parsing till it get script tag, after getting script tag it will load script
// after ending of js file execution parsing will be continued
//2)async->your js file is asynchronously downloading and till download html is parsing. Whenever js file will downloaded parsing will stop and js file execution 
//start and after ending of js file execution parsing will be continued
//3)differ->your js file is asynchronously downloadind, after download it will wait and after parsing of , downloaded js will be executed
