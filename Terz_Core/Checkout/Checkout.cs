using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Terz_Core.Checkout
{
    [XmlRoot(ElementName = "phone")]
    public class Phone
    {
        [XmlElement(ElementName = "areaCode")]
        public string AreaCode { get; set; }
        [XmlElement(ElementName = "number")]
        public string Number { get; set; }
    }

    [XmlRoot(ElementName = "document")]
    public class Document
    {
        [XmlElement(ElementName = "type")]
        public string Tipo { get; set; }
        [XmlElement(ElementName = "value")]
        public string Value { get; set; }
    }

    [XmlRoot(ElementName = "documents")]
    public class Documents
    {
        [XmlElement(ElementName = "document")]
        public Document Document { get; set; }
    }

    [XmlRoot(ElementName = "sender")]
    public class Sender
    {
        [XmlElement(ElementName = "name")]
        public string Name { get; set; }
        [XmlElement(ElementName = "email")]
        public string Email { get; set; }
        [XmlElement(ElementName = "phone")]
        public Phone Phone { get; set; }
        [XmlElement(ElementName = "documents")]
        public Documents Documents { get; set; }
    }

    [XmlRoot(ElementName = "item")]
    public class Item
    {
        [XmlElement(ElementName = "id")]
        public string Id { get; set; }
        [XmlElement(ElementName = "description")]
        public string Description { get; set; }
        [XmlElement(ElementName = "amount")]
        public string Amount { get; set; }
        [XmlElement(ElementName = "quantity")]
        public string Quantity { get; set; }
        [XmlElement(ElementName = "weight")]
        public string Weight { get; set; }
        [XmlElement(ElementName = "shippingCost")]
        public string ShippingCost { get; set; }
    }

    [XmlRoot(ElementName = "items")]
    public class Items
    {
        [XmlElement(ElementName = "item")]
        public Item Item { get; set; }
    }

    [XmlRoot(ElementName = "address")]
    public class Address
    {
        [XmlElement(ElementName = "street")]
        public string Street { get; set; }
        [XmlElement(ElementName = "number")]
        public string Number { get; set; }
        [XmlElement(ElementName = "complement")]
        public string Complement { get; set; }
        [XmlElement(ElementName = "district")]
        public string District { get; set; }
        [XmlElement(ElementName = "city")]
        public string City { get; set; }
        [XmlElement(ElementName = "state")]
        public string State { get; set; }
        [XmlElement(ElementName = "country")]
        public string Country { get; set; }
        [XmlElement(ElementName = "postalCode")]
        public string PostalCode { get; set; }
    }

    [XmlRoot(ElementName = "shipping")]
    public class Shipping
    {

        [XmlElement(ElementName = "type")]
        public string Tipo { get; set; }
        [XmlElement(ElementName = "cost")]
        public string Cost { get; set; }
        [XmlElement(ElementName = "addressRequired")]
        public string AddressRequired { get; set; }
    }

    [XmlRoot(ElementName = "receiver")]
    public class Receiver
    {
        [XmlElement(ElementName = "email")]
        public string Email { get; set; }
    }

    [XmlRoot(ElementName = "checkout")]
    public class Checkout
    {
        [XmlElement(ElementName = "sender")]
        public Sender Sender { get; set; }
        [XmlElement(ElementName = "currency")]
        public string Currency { get; set; }
        [XmlElement(ElementName = "items")]
        public Items Items { get; set; }
        [XmlElement(ElementName = "redirectURL")]
        public string RedirectURL { get; set; }
        [XmlElement(ElementName = "extraAmount")]
        public string ExtraAmount { get; set; }
        [XmlElement(ElementName = "reference")]
        public string Reference { get; set; }
        [XmlElement(ElementName = "shipping")]
        public Shipping Shipping { get; set; }
        [XmlElement(ElementName = "timeout")]
        public string Timeout { get; set; }
        [XmlElement(ElementName = "maxAge")]
        public string MaxAge { get; set; }
        [XmlElement(ElementName = "maxUses")]
        public string MaxUses { get; set; }
        [XmlElement(ElementName = "receiver")]
        public Receiver Receiver { get; set; }
        [XmlElement(ElementName = "enableRecovery")]
        public string EnableRecovery { get; set; }
        [XmlElement(ElementName = "code")]
        public string Code { get; set; }
        [XmlElement(ElementName = "date")]
        public string Date { get; set; }
    }
}
