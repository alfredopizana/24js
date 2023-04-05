/**
 * Crear el proceso de inscripcion de koders 
 * Utilizar callbacks y timeouts
 * Pasos:
 * 
 * 1. LLenar un formulario / Entrevista
 * 2. Mandar propuesta 
 * 3. LLenar contrato
 * 4. Tomar curso de introduccion
 * 
 * 
 * const koder = {
 *  name: "Eddie",
 *  interviewed: false,
 *  proposalSent: false,
 *  isEnrrolled: false,
 *  introductoryCourse: false
 * }
 * 
 */


const koderEddie = {
    name: "Eddie",
    interviewed: false,
    proposalSent: false,
    isEnrrolled: false,
    introductoryCourse: false
}



function takeAInterview(koderToInterview, callback) {
    console.log(`Entrevistando a ${koderToInterview.name}`)
    setTimeout(() => {
        let error = null;
        koderToInterview.interviewed = true


        // Con operador ternario
        // error = !koderToInterview.interviewed ? `Error en la entrevista con ${koderToInterview.name}` : null

        //Con operador and
        error = !koderToInterview.interviewed && `Error en la entrevista con ${koderToInterview.name}`

        callback(error, koderToInterview)
    }, 3000)
}

function sendAProposal(koderToOffer, callback) {
    console.log(`Revisando entrevista..  Trabajando en una propuesta para ${koderToOffer.name}`)
    setTimeout(() => {
        let error = null;

        koderToOffer.proposalSent = true

        if (!koderToOffer.proposalSent)
            error = `No se pudo generar la propuesta para ${koderToOffer.name}`

        callback(error, koderToOffer)

    }, 3000)

}


takeAInterview(koderEddie, (errorToInterview, koderInterviewed) => {

    if (errorToInterview) {
        console.log("Error en la entrevista", errorToInterview)
        return
    }
    console.log(`${koderInterviewed.name} ha sido entrevistado`)
    console.log(koderInterviewed)

    sendAProposal(koderInterviewed, (errorOnKoderWithProposal, koderWithProposal) => {

        if (errorOnKoderWithProposal) {
            console.log("Ocurrio un error en la oferta", errorOnKoderWithProposal)
            return
        }

        console.log(`La oferta se genero exitosamente para ${koderWithProposal.name}`)
        console.log(koderWithProposal)

    })
})


//Callback Hell