
exports.homePage= (req,res)=>{
    res.render('index')
}

exports.studentPage= (req,res)=>{
    res.render('student')
}


exports.registerPage= (req,res)=>{
    res.render('register')
}

exports.loginPage= (req,res)=>{
    res.render('login')
}


exports.registerCollegePage= (req,res)=>{
    res.render('collegeRegister')
}

exports.loginCollegePage= (req,res)=>{
    res.render('collegeLogin')
}

exports.pendingPage= (req,res)=>{
    res.render('collegeApprove')
}
