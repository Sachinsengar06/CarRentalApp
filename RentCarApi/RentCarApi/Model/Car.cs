using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentCarApi.Model
{
    public class Car
    {
        [Key]
        public int Id { get; set; }

        public string? Color { get; set; }
       
        public string? Brand { get; set; }
        [Required]
        public string? Model { get; set; }
        [Required]
        [Column(TypeName="decimal(18,4)")]
        public decimal Price { get; set; }
        [Required]
        public string? Description { get; set; }

        public string? CarImage { get; set; }

        public string? Title { get; set; }
    }
}
