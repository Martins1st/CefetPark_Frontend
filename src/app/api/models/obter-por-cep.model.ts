export class ObterPorCepModel {
    address_components: AddressComponentResponse[];
    geometry: GeometryResponse;
  }
  
  export class AddressComponentResponse {
    long_name: string;
  }
  
  export class GeometryResponse {
    location: LocationResponse;
  }
  
  export class LocationResponse {
    lat: string;
    lng: string;
  }
