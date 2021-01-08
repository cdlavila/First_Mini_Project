const Doctor = require('./models/doctor')
const Hospital = require('./models/hospital')

// Relation between Hospital and Doctor: "Hospital has many doctors, and doctors has only one hospital",
// (One to Many Relation)
Hospital.hasMany(Doctor, {as: "Doctors", foreignKey: "Hospital_Id"})
Doctor.belongsTo(Hospital, {as: "Hospital", foreignKey: "Hospital_Id"})