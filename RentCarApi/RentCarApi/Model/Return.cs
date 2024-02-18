namespace RentCarApi.Model
{
    public class Return
    {
        public int id { get; set; }
        public string? imgLink { get; set; }
        public string? title { get; set; }

        public DateTime rentDate { get; set; }
        public DateTime returnDate { get; set; }

        public string? outDamage { get; set; }
        public string? inDamage { get; set;}
        public bool isWorking { get;}
    }
}
