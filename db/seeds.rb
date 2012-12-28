# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
cookies = Cookie.create({ name: 'Thin Mint' },
                        { name: 'Samoas' },
                        { name: 'Tagalongs' },
                        { name: 'Lemonades' },
                        { name: 'Do-si-dos' },
                        { name: 'Savannah Smiles' },
                        { name: 'Thanks-A-Lot' },
                        { name: 'Dulce de Leche' },
                        { name: 'Mango Cremes' },
                        { name: 'Thank U Berry Munch' })
cookies.save

#   Mayor.create(name: 'Emanuel', city: cities.first)
