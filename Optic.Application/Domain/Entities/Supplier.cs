﻿using Optic.Application.Domain.Primitives;

namespace Optic.Application.Domain.Entities
{
    public class Supplier : AggregateRoot
    {
        public Supplier(
            int id,
            string name,
            string nit,
            string address,
            string cellPhoneNumber
            ) : base(id)
        {
            Name = name;
            Nit = nit;
            Address = address;
            CellPhoneNumber = cellPhoneNumber;
        }

        public string Name { get; private set; }
        public string Nit {  get; private set; }
        public string Address { get; private set; }
        public string Email { get; private set; } = string.Empty;
        public string CellPhoneNumber { get; private set; } 
        public string PhoneNumber { get; private set; } = string.Empty;
    }
}
