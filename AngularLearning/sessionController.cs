using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace AngularLearning
{
    public class sessionController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Session> Get()
        {
           
                var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
                string json = System.IO.File.ReadAllText(path + "/sessionData.json");
                JavaScriptSerializer ser = new JavaScriptSerializer();
                var personlist = ser.Deserialize<List<Session>>(json);
                return personlist;
            
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}