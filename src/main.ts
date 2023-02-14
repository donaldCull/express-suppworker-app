import express from "express";
import GetSupportWorkerVisits from "./GetSupportWorkerVisits";
import GetSupportWorkerResponse from "./mockApi/getSupportWorkers";
import GetVisitsResponse from "./mockApi/getVisits";
import { SupportWorker } from "./types/SupportWorker";
import { SupportWorkerVisits } from "./types/SupportWorkerVisits";
import { Visits } from "./types/Visits";
const app = express();
const port = 3000;
 
app.get("/getSupportWorkerVisits/:supportWorkerId", function (req, res) {
    try {
        const supportWorkerId = parseInt(req.params.supportWorkerId);
        const supportWorkers: SupportWorker[] = GetSupportWorkerResponse;
        const visits: Visits[] = GetVisitsResponse;
        const suppWorkVisits: SupportWorkerVisits[] = GetSupportWorkerVisits(supportWorkerId, supportWorkers, visits);
        res.send(suppWorkVisits);
    } catch (error) {
        console.log(error);
        res.send([])
    }
});
 
app.listen(3000, () => {
    console.log(`Bellevie api listening at http://localhost:${port}`);
});