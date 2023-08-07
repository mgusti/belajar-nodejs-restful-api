import supertest from "supertest";
import {
    createTestAddress,
    createTestContact,
    createTestUser,
    getTestAddress,
    getTestContact,
    removeAllTestAddresses,
    removeAllTestContacts,
    removeTestUser,
  } from "./test-util.js";
import { web } from "../src/application/web.js";

describe("POST /api/contacts/:contactId/addresses", () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
      });
      afterEach(async () => {
        await removeAllTestAddresses()
        await removeAllTestContacts();
        await removeTestUser();
      });

    it("should can create new address", async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
            .post("/api/contacts/" + testContact.id + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "jalan test",
                city: "kota test",
                province: "provinsi test",
                country: "indonesia",
                postal_code: "36128"
            })

        expect(result.status).toBe(200)
        expect(result.body.data.id).toBeDefined()
        expect(result.body.data.street).toBe("jalan test")
        expect(result.body.data.city).toBe("kota test")
        expect(result.body.data.province).toBe("provinsi test")
        expect(result.body.data.country).toBe("indonesia")
        expect(result.body.data.postal_code).toBe("36128")
    })

    it("should reject if address request is invalid", async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
            .post("/api/contacts/" + testContact.id + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "jalan test",
                city: "kota test",
                province: "provinsi test",
                country: "",
                postal_code: ""
            })

        expect(result.status).toBe(400)
    })

    it("should reject if contact address is not found", async () => {
        const testContact = await getTestContact()

        const result = await supertest(web)
            .post("/api/contacts/" + (testContact.id + 1) + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "jalan test",
                city: "kota test",
                province: "provinsi test",
                country: "",
                postal_code: ""
            })

        expect(result.status).toBe(404)
    })
})

describe("GET /api/contacts/:contactId/addresses/:addressId", () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress()
      });
      afterEach(async () => {
        await removeAllTestAddresses()
        await removeAllTestContacts();
        await removeTestUser();
      });

    it("should can get contact", async () => {
        const testContact = await getTestContact()
        const testAddress = await getTestAddress()

        const result = await supertest(web)
            .get("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
            .set("Authorization", "test")

        expect(result.status).toBe(200)
        expect(result.body.data.id).toBeDefined()
        expect(result.body.data.street).toBe("jalan test")
        expect(result.body.data.city).toBe("kota test")
        expect(result.body.data.province).toBe("provinsi test")
        expect(result.body.data.country).toBe("indonesia")
        expect(result.body.data.postal_code).toBe("36128")
    })

    it("should reject if contact not found", async () => {
        const testContact = await getTestContact()
        const testAddress = await getTestAddress()

        const result = await supertest(web)
            .get("/api/contacts/" + (testContact.id + 1)+ "/addresses/" + testAddress.id)
            .set("Authorization", "test")

        expect(result.status).toBe(404)
    })

    it("should reject if address not found", async () => {
        const testContact = await getTestContact()
        const testAddress = await getTestAddress()

        const result = await supertest(web)
            .get("/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1))
            .set("Authorization", "test")

        expect(result.status).toBe(404)
    })

})