using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentCarApi.Model
{
    public class Rentals
    {
        public int Id { get; set; }

        public int CarId { get; set; }

        public int CoustomerId { get; set; }

        [DataType(DataType.Date)]
        public DateTime RentDate { get; set; }

        [Column(TypeName ="date")]
        public DateTime? ReturnDate { get; set; }
        public bool IsReturn { get; set; }

       
       


    }
}
