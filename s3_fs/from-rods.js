const koder = {
    name: "Iyari",
    interviewed: false,
    proposalSent: false,
    isEnrolled: false,
    introductoryCourse: false,
};

const llenarFormulario = (callback) => {
    console.log("Llenando Formulario....");
    koder.interviewed = true;
    setTimeout(() => {
        callback(null, koder);
    }, 3000);
};

const propuesta = (callback) => {
    console.log("Haciendo propuesta....");
    koder.proposalSent = true;
    setTimeout(() => {
        callback(null, koder);
    }, 3000);
};
const contrato = (callback) => {
    console.log("Haciendo contrato.....");
    koder.isEnrolled = true;
    setTimeout(() => {
        callback(null, koder);
    }, 3000);
};
const cursoIntroductorio = (callback) => {
    console.log("Tomando curso introductorio");
    koder.introductoryCourse = true;
    setTimeout(() => {
        callback(null, koder);
    }, 3000);
};


llenarFormulario((error, koder) => {
    if (error) {
        console.log("Ocurrio un error", error);
        return;
    } else {
        console.log(koder);
        propuesta((error, koder) => {
            if (error) {
                console.log("Ocurrio un error", error);
                return;
            } else {
                console.log(koder);
                contrato((error, koder) => {
                    if (error) {
                        console.log("Ocurrio un error", error);
                        return;
                    } else {
                        console.log(koder);
                        cursoIntroductorio((error, koder) => {
                            if (error) {
                                console.log("Ocurrio un error", error);
                                return;
                            } else {
                                console.log(koder);
                            }
                        });
                    }
                });
            }
        });
    }
});