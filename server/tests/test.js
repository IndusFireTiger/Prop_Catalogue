import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);
chai.should();

it("get properties", (done) => {
    chai.request(server)
        .get('/getData')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
});


it("invalid url to return 404", (done) => {
    chai
    .request(server)
    .get('/invalidURL')
    .then(res => {
        res.should.have.status(404)
        done();
    })
});
