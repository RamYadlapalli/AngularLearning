using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularLearning
{
    public class Session
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Level { get; set; }
        public int VoteCount { get; set; }
        public int Duration { get; set; }
    }
}