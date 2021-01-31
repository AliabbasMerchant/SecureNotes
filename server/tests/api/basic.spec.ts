import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe("Basic spec", () => {
    it("runs displays no errors", (done: Mocha.Done) => {
        chai.request(app).get("/api/").end((err, res) => {
            expect(err).to.be.null;
            res.should.have.status(200);
            res.body.should.be.an("object");
            res.body.should.have.property("message").equal("YO");
            done();
        })
    })
})