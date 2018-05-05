admin = db.getSiblingDB("admin")

// creation of the admin user
admin.createUser(
  {
    user: "aurimas",
    pwd: "aurimasPassword2018",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

// let's authenticate to create the other user
db.getSiblingDB("admin").auth("aurimas", "aurimasPassword2018")

// creation of the replica set admin user
db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "replicaAdminPassword2018",
    roles : [ { "role": "clusterAdmin", "db" : "admin" } ]
  }
)