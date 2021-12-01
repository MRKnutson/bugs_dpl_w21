# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

b1 = Bug.create(name: "Covid", description: "2020")
b2 = Bug.create(name: "flu", description: "every year")

b1.vaccines.create(name: "pfzer", efficacy: 90.0)
b1.vaccines.create(name: "moderna", efficacy: 80.0)
b2.vaccines.create(name: "fluzz kiler", efficacy: 100.0)
b2.vaccines.create(name: "fluzz kiler plus", efficacy: 90.0)

Hospital.create(name: "UOU", city: "SLC", state: "UT")
Hospital.create(name: "Death Star", city: "Murray", state: "UT")
