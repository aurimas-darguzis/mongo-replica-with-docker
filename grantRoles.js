admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "aurimas", [ "root", { role: "root", db: "admin" } ] )