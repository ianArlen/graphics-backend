const graphics = () => {
    const json = {results:[{graph:{name:"REVENUE", count: "200000€", article1: "Tablet", 
                           article2:"Smartphone", percentage1:"60", percentage2:"40", 
                            number1:"120000€", number2:"80000€", color:"green"}},
                          {graph:{name:"IMPRESIONS", count: "50.000.000", article1: "Tablet", 
                           article2:"Smartphone", percentage1:"40", percentage2:"60", 
                           number1:"20.000.000", number2:"30.000.000", color:"blue"}},
                           {graph:{name:"VISITS", count: "50.000.000", article1: "Tablet", 
                            article2:"Smartphone", percentage1:"80", percentage2:"20", 
                            number1:"480.000.000", number2:"120.000.000", color:"orange"}}
                         ]
                 }
    return json;
}

module.exports = {graphics}; 